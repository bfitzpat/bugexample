import * as chai from 'chai';
import { TreeDataProvider, TreeItem } from '../extension';

const expect = chai.expect;

suite('example View', () => {

	let integrationExplorer: TreeDataProvider;

	setup(() => {
		integrationExplorer = new TreeDataProvider();
	});

	teardown(() => {
	});

	test('validate that we have some children', async () => {
		if (integrationExplorer) {
			let kids : any = integrationExplorer.getChildren();
			expect(kids).instanceOf(TreeItem);
			expect(kids.children().length()).equals(2);
		}
	});
});
