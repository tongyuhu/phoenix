/** @module contracts */

/**
 * Copyright (c) 2019 Burst Apps Team
 */


/**
 * The argument object for [[generateContractBytes]]
 *
 * @param {string} activationFeePlanck The minimum activation costs to run a contract in Planck
 * @param {string} hexCode The pure code (generated by BlockTalk Java>CIYAM compiler).
 * @param {boolean?} isLittleEndian The endianness of passed hexCode. The BlockTalk code is in Little Endian Byte Order.
 * That's why this flag is true per default.
 */
export interface GenerateContractArgs {
    activationFeePlanck: string;
    hexCode: string;
    isLittleEndian?: boolean;
}