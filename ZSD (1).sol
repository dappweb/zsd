// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

library SafeMath {

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        return a - b;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) return 0;
        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: division by zero");
        return a / b;
    }

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "SafeMath: modulo by zero");
        return a % b;
    }

    function max(int256 a, int256 b) internal pure returns (int256) {
        return a > b ? a : b;
    }

    function min(int256 a, int256 b) internal pure returns (int256) {
        return a < b ? a : b;
    }

}

contract ZSD is ERC20{
    
    using SafeMath for uint256;

    struct UserDesp{
        //邀请人
        address referrer;
        //邀请人数
        uint256 referralCount;

        //用户已提走的USDT
        uint256 withdrawUSDTBalances;

        uint256 withdrawZSDBalances;

        uint256 lastActionTime ;

    }

    address public admin;

    address private owner;
    
    uint256 public totalHolders; 

    uint256 public totalDeposits = 100; 

    //总充值人数
    mapping(uint=> address ) public holders;
    mapping(address => UserDesp) public users;

    mapping(uint=> address ) public depositList;

        //总注册人数
    uint public totalRegisters; 

    mapping(uint=> address ) public registers;
    mapping(address => bool) public registered;


    //USDT
    IERC20 usdtToken = IERC20(0xEd650C5D7a5Dc96988Bcc0bD8215807aBb773DB7 );
    IERC20 zsdtToken = IERC20(this);


    uint256 public usdtReserve = 504 * 10 ** 18 ;
    uint256 public zsdReserve = 168_000 * 10 ** 18 ;

    uint256 public RATE; // 初始乘积，可以根据实际情况调整


    mapping(address => bool) public whitelist;

    uint public constant ONE_DAY = 24 hours;

    event Registered(address indexed user, address indexed referrer);
    event DepositUSDTFunds(address indexed user, uint256 indexed  usdtAmount );
    event DepositUSDTANDZSDFunds( uint256 indexed usdtAmount, uint256 indexed  zsdAmount );
    event refereWared( address indexed user,address indexed refer,  uint256 indexed  usdtAmount );
    event WithdraZSDFunds(address indexed user, uint256 indexed  usdtAmount );

    modifier onlyAdmin() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor ()
        ERC20("Zillion Stars Dreamer", "ZSD")
    {
        _mint(msg.sender, 1680_000_000 * 10 ** decimals());
        //合约管理员
        owner = msg.sender;
        //项目防地质
        admin = msg.sender;

        registers[totalRegisters] = msg.sender;

        registered[msg.sender] = true;

        users[msg.sender] = UserDesp({
            referrer: address(this),
            referralCount: 0,
            //用户可提的USDT
            withdrawUSDTBalances: 1,
            withdrawZSDBalances: 0,
            lastActionTime: 0 
        });

        whitelist[msg.sender] = true;

        RATE = 84672000 * 10 ** 18 * 10  ** 18;
    }

    function changeAdmin(address newAdmin) public onlyAdmin()  {
        require(msg.sender == admin, "Only admin can change admin");
        require(newAdmin != address(0), "Invalid new admin address");
        admin = newAdmin;
    }

    function changeRate(uint256 rate) public onlyAdmin()  {
        require(rate != 0, "Invalid new admin address");
        RATE = rate * 10 ** 18 * 10  ** 18;
    }

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20)
    {
        super._update(from, to, value);
    }

    //提走所有的bnb
    function withdrawEther() external onlyAdmin {
        payable(owner).transfer(balanceOf(address(this)));
    }
    //提走所有的代币
    function withdrawToken(address tokenAddress) external onlyAdmin {
        IERC20(tokenAddress).transfer(owner,IERC20(tokenAddress).balanceOf(address(this)));
    }

    //帮助别人充值
    function addusdt(address useraddress, uint256 usdtAmount) public  {
               //必须是已经注册的用户
        require(registered[msg.sender], "User  not  registered");

        //USDT
        // 确保合约有足够的余量从 msg.sender 转移代币
        uint256 allowance = usdtToken.allowance(msg.sender, address(this));

        require(allowance >= usdtAmount, "ERC20InsufficientAllowance: allowance is less than the required USDT amount");

        usdtToken.transferFrom(msg.sender, address(this), usdtAmount);

        users[useraddress].withdrawUSDTBalances += usdtAmount * 2;

        
    }


    //新用户注册，参数，推荐人地址
    function register(address referrer) public {

        //邀请人必须已经投资过
        require(users[referrer].withdrawUSDTBalances > 0, "referrer has not deposited");
        //用户没有注册过
        require(!registered[msg.sender], "User already registered");
        //邀请人和用户不是同一个人
        require(referrer != msg.sender, "You cannot refer yourself");

        users[msg.sender] = UserDesp({
            referrer: referrer,
            referralCount: 0,
            //用户可提的USDT
            withdrawUSDTBalances: 0,
            withdrawZSDBalances: 0,
            lastActionTime: 0 
        });

        if (registered[referrer]) {
            users[referrer].referralCount++;
        }

        totalRegisters++;

        registers[totalRegisters] = msg.sender;

        registered[msg.sender] = true;

        emit Registered(msg.sender, referrer);
    }

    //获取上级推荐人
    function getReferrer(address user) public view returns (address) {
        return users[user].referrer;
    }

    //获取推广团队人数
    function getReferralCount(address user) public view returns (uint256) {
        return users[user].referralCount;
    }

    //用户要执行的操作有很多，
    // 1，授权USDT转账权限给ZSD合约，数量一亿， approve（ZSD合约地址，1000000000 * 10 ** 18 ）
    //2，授权ZSD转账权限给ZSD合约，数量一亿。 approve（ZSD合约地址，1000000000 * 10 ** 18 ）
    //3，用户需要先注册并且把邀请人的地址最为参数 register(address referrer) 提示1，referrer has not deposited，2，User already registered ，3，You cannot refer yourself
    //第一邀请人是管理员
    // 4,用户调用 USDT 矿机 depositUSDTFunds(uint256 usdtAmount )，
    // 5,用户调用 USDT 和 ZSD 矿机 depositUSDTANDZSDFunds(uint256 usdtAmount )

    //充值USDT 前提条件是用户必须已经授权本合约从USDT合约划转账务

    
    function depositUSDTFunds(uint256 usdtAmount ) public {
        //必须是已经注册的用户
        require(registered[msg.sender], "User  not  registered");
        
        address referrer =  getReferrer(msg.sender);
        //USDT
        // 确保合约有足够的余量从 msg.sender 转移代币
        uint256 allowance = usdtToken.allowance(msg.sender, address(this));

        require(allowance >= usdtAmount, "ERC20InsufficientAllowance: allowance is less than the required USDT amount");

        // 将USDT从 msg.sender 转移到本合约
        bool success = usdtToken.transferFrom(msg.sender, address(this), usdtAmount);
        
        require(success, "USDT transfer fail");

        users[msg.sender].withdrawUSDTBalances +=    usdtAmount.mul(2);
       

        //第一次充值
        if( users[msg.sender].lastActionTime == 0){
           
            //转给项目方
            usdtToken.transfer( admin, usdtAmount * 5 / 100 );
            
            //拉盘
            usdtReserve += usdtAmount * 50 / 100;

            uint256 zsdAmount = (usdtAmount * 10 * 18) / (getPriceZSD() * 100);

            zsdReserve = SafeMath.sub(zsdReserve,zsdAmount);
            //销毁
            super._burn(address(this),zsdAmount);
             
            if(users[msg.sender].withdrawUSDTBalances >= users[referrer].withdrawUSDTBalances){
                usdtToken.transfer( referrer, users[referrer].withdrawUSDTBalances * 5 / 100 );

                emit refereWared( msg.sender,referrer,  users[referrer].withdrawUSDTBalances * 5 / 100 );

                usdtToken.transfer( admin, usdtAmount * 5 / 100 );
            }else{
                usdtToken.transfer( referrer, usdtAmount * 10 / 100 );
                emit refereWared( msg.sender,referrer,  usdtAmount * 10 / 100 );
            }
         
            for (uint i = 1; i <= 20; i++) {
                // 
                referrer =  getReferrer(referrer);

                if(address(0) == referrer){
                    break;
                }
                //用户的算力
                if(users[referrer].withdrawUSDTBalances >= users[msg.sender].withdrawUSDTBalances){
                    usdtToken.transfer( referrer, usdtAmount * 10/ 1000 );

                    emit refereWared( msg.sender,referrer,  usdtAmount * 10 / 100 );
                }else{
                    usdtToken.transfer( referrer, users[referrer].withdrawUSDTBalances * 5/ 1000 );

                    emit refereWared( msg.sender,referrer,  users[referrer].withdrawUSDTBalances * 5/ 1000  );

                    usdtToken.transfer( admin, usdtAmount * 5/ 1000 );
                }
            }
            
            totalHolders++;

            holders[totalHolders] = msg.sender;

            users[msg.sender].lastActionTime = block.timestamp;
        } 
        else{


            //拉盘
            usdtReserve +=  usdtAmount * 50/ 100;
            //转给项目方
            usdtToken.transfer( admin, usdtAmount * 50/ 100 );

            uint256 zsdAmount = (usdtAmount * 10 ** 18 )  / (getPriceZSD() * 100 ) ;

            if(zsdAmount != 0 ){
                //销毁
                super._burn(address(this),zsdAmount);

                zsdReserve  = SafeMath.sub(zsdReserve,zsdAmount);
            }
        }
         
        
        //时间算力
        for (uint j = totalDeposits; j >= totalDeposits - 15 ; j--) {
            
            address deposter = depositList[j];

            if(address(0) != deposter){
            
                if(users[deposter].withdrawUSDTBalances <= users[msg.sender].withdrawUSDTBalances){

                    usdtToken.transfer( deposter, users[deposter].withdrawUSDTBalances * 5/ 1000 );

                    emit refereWared( msg.sender,referrer,  users[deposter].withdrawUSDTBalances * 5/ 1000  );

                    usdtToken.transfer( admin, usdtAmount * 5/ 1000 );
                }else{
            
                    usdtToken.transfer( deposter, usdtAmount * 10/ 1000 );

                    emit refereWared( msg.sender,referrer, usdtAmount * 10/ 1000 );
            
                }
            }else {
                break;
            }
        }
       

        totalDeposits++;

        depositList[totalDeposits] = msg.sender;

        emit DepositUSDTFunds(msg.sender,usdtAmount);

    }

    //充值USDT 前提条件是用户必须已经授权本合约从USDT合约划转账务
    function depositUSDTANDZSDFunds(uint256 usdtAmount ) public {
        //必须是已经注册的用户
        require(registered[msg.sender], "User already registered");

        uint256 zsdAmount = ( usdtAmount / 3 )* 7;

        zsdAmount = SafeMath.div( (zsdAmount * 10 ** 18) , getPriceZSD() );

        users[msg.sender].withdrawUSDTBalances +=   usdtAmount * 2;

        users[msg.sender].withdrawZSDBalances +=   zsdAmount * 3;

        // 确保合约有足够的余量从 msg.sender 转移代币
        uint256 allowance = usdtToken.allowance(msg.sender, address(this));
        require(allowance >= usdtAmount, "ERC20InsufficientAllowance: allowance is less than the required USDT amount");   

        // 确保合约有足够的余量从 msg.sender 转移代币
        uint256 ZSDTokenallowance = zsdtToken.allowance(msg.sender, address(this));
        require(ZSDTokenallowance >= zsdAmount, "ERC20InsufficientAllowance: allowance is less than the required ZSD amount");

        usdtToken.transferFrom(msg.sender, address(this), usdtAmount);

        zsdtToken.transferFrom(msg.sender, address(this), zsdAmount);

        zsdtToken.transfer( admin, zsdAmount * 5/ 100 );

        //address referrer =  getReferrer(msg.sender);
        //USDT 处理 第一次充值
        if( users[msg.sender].lastActionTime == 0){

            //拉盘
            usdtReserve +=  usdtAmount * 50/ 100;

            uint256 rzsdAmount = (usdtAmount * 10 ** 18 )/ (getPriceZSD() * 100 ) ;

            zsdReserve =  SafeMath.sub(zsdReserve,rzsdAmount) ;
            //销毁
             super._burn(address(this), zsdAmount);
            //转给项目方
            usdtToken.transfer( admin, usdtAmount * 5 / 100 );

            users[msg.sender].lastActionTime = block.timestamp;
        }else{
            //转给项目方
            usdtToken.transfer( admin, usdtAmount * 50/ 100 );

            //拉盘
            usdtReserve +=  usdtAmount;

            uint256 tempZsdAmount = (usdtAmount * 10 ** 18 ) / (getPriceZSD() * 100);

            zsdReserve = SafeMath.sub(zsdReserve,tempZsdAmount) ;
            //销毁
             super._burn(address(this),tempZsdAmount);
        }
        // ZSD 处理
        if( users[msg.sender].lastActionTime == 0){

            // 将USDT从 msg.sender 转移到本合约
             super._burn(address(this),zsdAmount * 50/ 100);
            zsdReserve =  SafeMath.sub(zsdReserve,zsdAmount * 50/ 100) ;

            //转给项目方

            users[msg.sender].lastActionTime = block.timestamp;
            
        }else{ 
             super._burn(address(this),zsdAmount * 95 / 100);
        }

        totalDeposits++;
        depositList[totalDeposits] = msg.sender;

        emit DepositUSDTANDZSDFunds(usdtAmount,zsdAmount);

    }


    //用户提走 zsd
    function withdraZSDFunds() public{

        uint256 userdays =  block.timestamp -  users[msg.sender].lastActionTime / ONE_DAY;

        uint256 withdrawZSDAmount = users[msg.sender].withdrawUSDTBalances * users[msg.sender].withdrawUSDTBalances * userdays ** 5 /1000;
        //确保用户有足够的额度可以提取
        uint256 usdtAmount = ( withdrawZSDAmount * getPriceZSD() );
 
        IERC20 zsdToken = IERC20(this);

        zsdToken.transfer( msg.sender, withdrawZSDAmount);

        usdtToken.transfer(msg.sender, usdtAmount * 5 /100);

        users[msg.sender].withdrawZSDBalances = SafeMath.sub(users[msg.sender].withdrawZSDBalances, users[msg.sender].withdrawZSDBalances * userdays ** 5 /1000)  ;

        users[msg.sender].withdrawUSDTBalances = SafeMath.sub(users[msg.sender].withdrawUSDTBalances,users[msg.sender].withdrawUSDTBalances * userdays ** 5 /1000)  ;

        users[msg.sender].lastActionTime = block.timestamp;

        emit WithdraZSDFunds(msg.sender,withdrawZSDAmount);
    }



    function addLiquidity(uint256 _usdtAmount) external {

        require(whitelist[msg.sender], "Not authorized");
        
        uint256 _zsdAmount = SafeMath.div(_usdtAmount,RATE);

        uint256 allowance = usdtToken.allowance(msg.sender, address(this));
        require(allowance >= _usdtAmount, "ERC20InsufficientAllowance: allowance is less than the required USDT amount");   

        // 确保合约有足够的余量从 msg.sender 转移代币
        uint256 ZSDTokenallowance = zsdtToken.allowance(msg.sender, address(this));
        require(ZSDTokenallowance >= _zsdAmount, "ERC20InsufficientAllowance: allowance is less than the required ZSD amount");

        // 将流动性代币存入合约
        usdtToken.transferFrom(msg.sender, address(this), _usdtAmount);
        zsdtToken.transferFrom(msg.sender, address(this), _zsdAmount);

        // 更新储备量
        usdtReserve += _usdtAmount;
        zsdReserve += _zsdAmount;
    }

    function swapUSDTtoZSD(uint256 _usdtAmount) external {
        require(usdtReserve >= _usdtAmount, "Insufficient USDT reserve");


        uint256 newUsdtReserve = SafeMath.sub(usdtReserve ,_usdtAmount);
        uint256 zsdAmount = SafeMath.div((zsdReserve * _usdtAmount) , newUsdtReserve);

        usdtToken.transfer(msg.sender, _usdtAmount);
        zsdtToken.transfer(msg.sender, zsdAmount);

        // 更新储备量
        usdtReserve = newUsdtReserve;
        zsdReserve = SafeMath.sub(zsdReserve ,zsdAmount);
    }

    function swapZSDtoUSDT(uint256 _zsdAmount) public  {

        require(zsdReserve >= _zsdAmount, "Insufficient ZSD reserve");
        require(whitelist[msg.sender], "Not authorized");

        uint256 newZsdReserve = SafeMath.sub(zsdReserve , _zsdAmount) ;

        uint256 usdtAmount = SafeMath.div((usdtReserve * _zsdAmount) , newZsdReserve);

        zsdtToken.transfer(msg.sender, _zsdAmount);
        usdtToken.transfer(msg.sender, usdtAmount);

        // 更新储备量
        zsdReserve = newZsdReserve;
        usdtReserve = SafeMath.sub(usdtReserve,zsdReserve);
    }

    function getPriceUSDT() public view returns (uint256) {
        return  SafeMath.div(usdtReserve * 10 ** 18,zsdReserve); // 返回1 ZSD的价格（以USDT计）
    }

    function getPriceZSD() public view returns (uint256) {
        return SafeMath.div(zsdReserve * 10 ** 18,usdtReserve); // 返回1 USDT的价格（以ZSD计）
    }

    function addToWhitelist(address _user) external onlyAdmin {
        whitelist[_user] = true;
    }

    function removeFromWhitelist(address _user) external onlyAdmin {
        whitelist[_user] = false;
    }
    
}