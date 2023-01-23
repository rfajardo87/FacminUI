import type { Persona } from '../../../shared/Models/Persona';
import { axiosInstance } from '../../../shared/API/instance';
import { personas as PersonaUri } from '../../../shared/API/endpoints/persona';
import type { PageLoad } from './$types';

export const load = (async () => {
	let personas: Persona[] = [];
	try {
		const rsp = await axiosInstance.get(PersonaUri);
		personas = rsp.data.data as Persona[];
	} catch (error) {
		console.log(error);
	}
	return {
		personas
	};
}) satisfies PageLoad;
