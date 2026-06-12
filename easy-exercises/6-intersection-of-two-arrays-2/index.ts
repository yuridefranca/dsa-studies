function intersect(nums1: number[], nums2: number[]): number[] {
	const ocurrencies1: Record<number, number> = {};
	for (const element of nums1) {
		if (!ocurrencies1[element]) {
			ocurrencies1[element] = 1;
			continue;
		}

		ocurrencies1[element] += 1;
	}

	const ocurrencies2: Record<number, number> = {};
	for (const element of nums2) {
		if (!ocurrencies2[element]) {
			ocurrencies2[element] = 1;
			continue;
		}

		ocurrencies2[element] += 1;
	}

	console.log({ ocurrencies1, ocurrencies2 });

	return [];
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
