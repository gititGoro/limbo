/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface UpdateProposalConfigProposalInterface extends ethers.utils.Interface {
  functions: {
    "description()": FunctionFragment;
    "orchestrateExecute()": FunctionFragment;
    "parameterize(uint256,uint256,address)": FunctionFragment;
    "params()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orchestrateExecute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parameterize",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "params", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orchestrateExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parameterize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;

  events: {};
}

export class UpdateProposalConfigProposal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UpdateProposalConfigProposalInterface;

  functions: {
    description(overrides?: CallOverrides): Promise<[string]>;

    orchestrateExecute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    parameterize(
      votingDuration: BigNumberish,
      requiredFateStake: BigNumberish,
      proposalFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    params(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        votingDuration: BigNumber;
        requiredFateStake: BigNumber;
        proposalFactory: string;
      }
    >;
  };

  description(overrides?: CallOverrides): Promise<string>;

  orchestrateExecute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  parameterize(
    votingDuration: BigNumberish,
    requiredFateStake: BigNumberish,
    proposalFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  params(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      votingDuration: BigNumber;
      requiredFateStake: BigNumber;
      proposalFactory: string;
    }
  >;

  callStatic: {
    description(overrides?: CallOverrides): Promise<string>;

    orchestrateExecute(overrides?: CallOverrides): Promise<void>;

    parameterize(
      votingDuration: BigNumberish,
      requiredFateStake: BigNumberish,
      proposalFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    params(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        votingDuration: BigNumber;
        requiredFateStake: BigNumber;
        proposalFactory: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    description(overrides?: CallOverrides): Promise<BigNumber>;

    orchestrateExecute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    parameterize(
      votingDuration: BigNumberish,
      requiredFateStake: BigNumberish,
      proposalFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    params(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orchestrateExecute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    parameterize(
      votingDuration: BigNumberish,
      requiredFateStake: BigNumberish,
      proposalFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}