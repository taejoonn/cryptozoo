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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AnimalInterface extends ethers.utils.Interface {
  functions: {
    "data()": FunctionFragment;
    "description()": FunctionFragment;
    "name()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;

  events: {};
}

export class Animal extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: AnimalInterface;

  functions: {
    data(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        assetURI: string;
        assetGatewayURL: string;
        metadataURI: string;
        metadataGatewayURL: string;
      }
    >;

    "data()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        assetURI: string;
        assetGatewayURL: string;
        metadataURI: string;
        metadataGatewayURL: string;
      }
    >;

    description(overrides?: CallOverrides): Promise<[string]>;

    "description()"(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;
  };

  data(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      assetURI: string;
      assetGatewayURL: string;
      metadataURI: string;
      metadataGatewayURL: string;
    }
  >;

  "data()"(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      assetURI: string;
      assetGatewayURL: string;
      metadataURI: string;
      metadataGatewayURL: string;
    }
  >;

  description(overrides?: CallOverrides): Promise<string>;

  "description()"(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    data(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        assetURI: string;
        assetGatewayURL: string;
        metadataURI: string;
        metadataGatewayURL: string;
      }
    >;

    "data()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        assetURI: string;
        assetGatewayURL: string;
        metadataURI: string;
        metadataGatewayURL: string;
      }
    >;

    description(overrides?: CallOverrides): Promise<string>;

    "description()"(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    data(overrides?: CallOverrides): Promise<BigNumber>;

    "data()"(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    "description()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    data(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "data()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "description()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}