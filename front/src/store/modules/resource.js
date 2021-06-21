export default {
	state: {
		// Define states
		resourceList: undefined,
		singleResource: undefined,
	},

	getters: {
		// Define getters
		getResourceList: (state) => state.resourceList,
		getSingleResource: (state) => state.singleResource,
	},

	mutations: {
		// Define mutations
		RESOURCELIST(state, payload) { state.resourceList = payload.data },
		SINGLERESOURCE(state, payload) { state.singleResource = payload.data },
	},

	actions: {
		// [CRUD] GET Method to get resource list
		fetchResourceList(context) {
			fetch(`${process.env.VUE_APP_API_URL}/v1/resource`, { method: `GET` }) //=> Fetch API
				.then(response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
				.then(async (apiResponse) => await context.commit(`RESOURCELIST`, { data: apiResponse.data })) //=> Commit changes
				.catch(apiError => console.log(apiError)) //=> Catch error
		},

		//[CRUD] GET Method to get resource data from ID
		fetchSingleResource(context, id) {
			fetch(`${process.env.VUE_APP_API_URL}/v1/resource/${id}`, { method: `GET` }) //=> Fetch API
				.then(response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
				.then(async (apiResponse) => await context.commit(`SINGLERESOURCE`, { data: apiResponse.data })) //=> Commit changes
				.catch(apiError => console.log(apiError)) //=> Catch error
		}
	}
}