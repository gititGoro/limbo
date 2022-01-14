/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PyroWeth10Proxy,
  PyroWeth10ProxyInterface,
} from "../PyroWeth10Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pyroWeth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseTokenAmount",
        type: "uint256",
      },
    ],
    name: "calculateMintedPyroWeth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pyroTokenAmount",
        type: "uint256",
      },
    ],
    name: "calculateRedeemedWeth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseTokenAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pyroTokenAmount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth10",
    outputs: [
      {
        internalType: "contract IWETH10",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260018060146101000a81548160ff0219169083151502179055503480156200002b57600080fd5b5060405162001db638038062001db6833981810160405281019062000051919062000327565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008173ffffffffffffffffffffffffffffffffffffffff166379502c556040518163ffffffff1660e01b8152600401608060405180830381600087803b1580156200017857600080fd5b505af11580156200018d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b3919062000353565b505091505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016200029a9291906200040d565b602060405180830381600087803b158015620002b557600080fd5b505af1158015620002ca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002f09190620003bf565b505050620004b8565b6000815190506200030a8162000484565b92915050565b60008151905062000321816200049e565b92915050565b6000602082840312156200033a57600080fd5b60006200034a84828501620002f9565b91505092915050565b600080600080608085870312156200036a57600080fd5b60006200037a87828801620002f9565b94505060206200038d87828801620002f9565b9350506040620003a087828801620002f9565b9250506060620003b38782880162000310565b91505092959194509250565b600060208284031215620003d257600080fd5b6000620003e28482850162000310565b91505092915050565b620003f6816200043a565b82525050565b62000407816200047a565b82525050565b6000604082019050620004246000830185620003eb565b620004336020830184620003fc565b9392505050565b600062000447826200045a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200048f816200043a565b81146200049b57600080fd5b50565b620004a9816200044e565b8114620004b557600080fd5b50565b6118ee80620004c86000396000f3fe60806040526004361061009c5760003560e01c80638da5cb5b116100645780638da5cb5b14610188578063a0712d68146101b3578063b47e740f146101e3578063c55dae6314610220578063db006a751461024b578063f2fde38b146102885761009c565b80630adcdbaa146100a15780632b2cdf00146100cc578063700bc71f146100f757806370a0823114610134578063715018a614610171575b600080fd5b3480156100ad57600080fd5b506100b66102b1565b6040516100c391906115bc565b60405180910390f35b3480156100d857600080fd5b506100e1610358565b6040516100ee9190611521565b60405180910390f35b34801561010357600080fd5b5061011e60048036038101906101199190611363565b61037e565b60405161012b91906115bc565b60405180910390f35b34801561014057600080fd5b5061015b60048036038101906101569190611311565b61046a565b60405161016891906115bc565b60405180910390f35b34801561017d57600080fd5b5061018661051e565b005b34801561019457600080fd5b5061019d61066a565b6040516101aa919061147d565b60405180910390f35b6101cd60048036038101906101c89190611363565b610693565b6040516101da91906115bc565b60405180910390f35b3480156101ef57600080fd5b5061020a60048036038101906102059190611363565b610aca565b60405161021791906115bc565b60405180910390f35b34801561022c57600080fd5b50610235610cff565b604051610242919061147d565b60405180910390f35b34801561025757600080fd5b50610272600480360381019061026d9190611363565b610d25565b60405161027f91906115bc565b60405180910390f35b34801561029457600080fd5b506102af60048036038101906102aa9190611311565b611102565b005b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630adcdbaa6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031b57600080fd5b505afa15801561032f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610353919061138c565b905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630adcdbaa6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103e957600080fd5b505afa1580156103fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610421919061138c565b9050600081670de0b6b3a76400008561043a9190611619565b61044491906115e8565b90506103e86103e7826104579190611619565b61046191906115e8565b92505050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016104c7919061147d565b60206040518083038186803b1580156104df57600080fd5b505afa1580156104f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610517919061138c565b9050919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a39061157c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160149054906101000a900460ff166106e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106db9061153c565b60405180910390fd5b6000600160146101000a81548160ff021916908315150217905550813414801561070e5750600082115b61074d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107449061159c565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107b757600080fd5b505af11580156107cb573d6000803e3d6000fd5b50505050506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161082d919061147d565b60206040518083038186803b15801561084557600080fd5b505afa158015610859573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087d919061138c565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a0712d68826040518263ffffffff1660e01b81526004016108da91906115bc565b602060405180830381600087803b1580156108f457600080fd5b505af1158015610908573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092c919061138c565b506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161098a919061147d565b60206040518083038186803b1580156109a257600080fd5b505afa1580156109b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109da919061138c565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610a399291906114f8565b602060405180830381600087803b158015610a5357600080fd5b505af1158015610a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8b919061133a565b506103e86103e782610a9d9190611619565b610aa791906115e8565b9250505060018060146101000a81548160ff021916908315150217905550919050565b6000806103e8600184610add9190611619565b610ae791906115e8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b4f57600080fd5b505afa158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b87919061138c565b610b919190611673565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401610c12919061147d565b60206040518083038186803b158015610c2a57600080fd5b505afa158015610c3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c62919061138c565b9050600082670de0b6b3a764000083610c7b9190611619565b610c8591906115e8565b905060006103e86103e787610c9a9190611619565b610ca491906115e8565b905060006064600283610cb79190611619565b610cc191906115e8565b905060008183610cd19190611673565b9050670de0b6b3a76400008482610ce89190611619565b610cf291906115e8565b9650505050505050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160149054906101000a900460ff16610d76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6d9061153c565b60405180910390fd5b6000600160146101000a81548160ff021916908315150217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610df0939291906114c1565b602060405180830381600087803b158015610e0a57600080fd5b505af1158015610e1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e42919061133a565b506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ea0919061147d565b60206040518083038186803b158015610eb857600080fd5b505afa158015610ecc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef0919061138c565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663db006a75826040518263ffffffff1660e01b8152600401610f4d91906115bc565b602060405180830381600087803b158015610f6757600080fd5b505af1158015610f7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9f919061138c565b506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ffd919061147d565b60206040518083038186803b15801561101557600080fd5b505afa158015611029573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104d919061138c565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663205c287833836040518363ffffffff1660e01b81526004016110ac929190611498565b600060405180830381600087803b1580156110c657600080fd5b505af11580156110da573d6000803e3d6000fd5b50505050809250505060018060146101000a81548160ff021916908315150217905550919050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611190576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111879061157c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611200576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f79061155c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506112cc81611873565b92915050565b6000815190506112e18161188a565b92915050565b6000813590506112f6816118a1565b92915050565b60008151905061130b816118a1565b92915050565b60006020828403121561132357600080fd5b6000611331848285016112bd565b91505092915050565b60006020828403121561134c57600080fd5b600061135a848285016112d2565b91505092915050565b60006020828403121561137557600080fd5b6000611383848285016112e7565b91505092915050565b60006020828403121561139e57600080fd5b60006113ac848285016112fc565b91505092915050565b6113be816116b9565b82525050565b6113cd816116a7565b82525050565b6113dc81611701565b82525050565b60006113ef6022836115d7565b91506113fa82611783565b604082019050919050565b60006114126026836115d7565b915061141d826117d2565b604082019050919050565b60006114356020836115d7565b915061144082611821565b602082019050919050565b6000611458601f836115d7565b91506114638261184a565b602082019050919050565b611477816116f7565b82525050565b600060208201905061149260008301846113c4565b92915050565b60006040820190506114ad60008301856113b5565b6114ba602083018461146e565b9392505050565b60006060820190506114d660008301866113c4565b6114e360208301856113c4565b6114f0604083018461146e565b949350505050565b600060408201905061150d60008301856113c4565b61151a602083018461146e565b9392505050565b600060208201905061153660008301846113d3565b92915050565b60006020820190508181036000830152611555816113e2565b9050919050565b6000602082019050818103600083015261157581611405565b9050919050565b6000602082019050818103600083015261159581611428565b9050919050565b600060208201905081810360008301526115b58161144b565b9050919050565b60006020820190506115d1600083018461146e565b92915050565b600082825260208201905092915050565b60006115f3826116f7565b91506115fe836116f7565b92508261160e5761160d611754565b5b828204905092915050565b6000611624826116f7565b915061162f836116f7565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561166857611667611725565b5b828202905092915050565b600061167e826116f7565b9150611689836116f7565b92508282101561169c5761169b611725565b5b828203905092915050565b60006116b2826116d7565b9050919050565b60006116c4826116d7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061170c82611713565b9050919050565b600061171e826116d7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f5079726f50726f78793a207265656e7472616e6379206775617264206163746960008201527f7665000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f5079726f5765746850726f78793a20616d6f756e7420696e76617269616e7400600082015250565b61187c816116a7565b811461188757600080fd5b50565b611893816116cb565b811461189e57600080fd5b50565b6118aa816116f7565b81146118b557600080fd5b5056fea2646970667358221220a9707932efbee0e5e4519775488488152730f6f0b5c35213fdc72ee95c36d2de64736f6c63430008040033";

export class PyroWeth10Proxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    pyroWeth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PyroWeth10Proxy> {
    return super.deploy(pyroWeth, overrides || {}) as Promise<PyroWeth10Proxy>;
  }
  getDeployTransaction(
    pyroWeth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(pyroWeth, overrides || {});
  }
  attach(address: string): PyroWeth10Proxy {
    return super.attach(address) as PyroWeth10Proxy;
  }
  connect(signer: Signer): PyroWeth10Proxy__factory {
    return super.connect(signer) as PyroWeth10Proxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PyroWeth10ProxyInterface {
    return new utils.Interface(_abi) as PyroWeth10ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PyroWeth10Proxy {
    return new Contract(address, _abi, signerOrProvider) as PyroWeth10Proxy;
  }
}