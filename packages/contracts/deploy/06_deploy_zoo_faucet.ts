// deploy/06_deploy_zoo_faucet.ts
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { getDeployerAddress } from '../lib/deploy_helper'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const OWNER_ADDRESS = await getDeployerAddress(hre)

    const useProxy = !hre.network.live

    const tokenAddress = (await deployments.get('ZooToken')).address

    // Proxy only in non-live network (localhost and hardhat network) enabling
    // HCR (Hot Contract Replacement) in live network, proxy is disabled and
    // constructor is invoked
    await deploy('ZooFaucet', {
        from: OWNER_ADDRESS,
        args: [tokenAddress],
        log: true,
        // proxy: useProxy && 'postUpgrade',
    })

    return !useProxy // When live network, record the script as executed to prevent rexecution
}

export default func
func.id = 'deploy_zoo_faucet' // ID required to prevent reexecution
func.tags = ['ZooFaucet']
func.dependencies = ['ZooToken']
