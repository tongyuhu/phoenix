import {loadEnvironment} from './helpers/environment';
import {BurstService} from '../../../service/burstService';
import {getAllAssets, getAsset} from '../../factories/asset';

const environment = loadEnvironment();

jest.setTimeout(environment.timeout);

describe(`[E2E] Asset Api`, () => {

    const service = new BurstService({
        nodeHost: environment.testNetHost,
        apiRootUrl: environment.testNetApiPath
    });

    it('should getAsset', async () => {
        const asset = await getAsset(service)(environment.testAssetId);
        expect(asset).not.toBeUndefined();
    });

    it('should getAllAssets', async () => {
        const assetList = await getAllAssets(service)();
        expect(assetList.assets.length).toBeGreaterThan(0);
    });
});
