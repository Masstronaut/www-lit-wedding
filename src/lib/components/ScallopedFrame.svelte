<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		--radius: 20px; /* radius of circles */
		padding: calc(1.5 * var(--radius));
		box-sizing: border-box;
		max-width: fit-content;
		width: 100%;
		background: #e97f02;
		mask:
			linear-gradient(#000 0 0) no-repeat 50% / calc(100% - 1.5 * var(--radius))
				calc(100% - 1.5 * var(--radius)),
			radial-gradient(farthest-side, #000 95%, #0000) 0 0 / calc(2 * var(--radius))
				calc(2 * var(--radius)) round;
	}
</style>
