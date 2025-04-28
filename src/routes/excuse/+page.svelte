<script lang="ts">
	import ScallopedFrame from '$lib/components/ScallopedFrame.svelte';
	let excuse = $state<string>('');
	// Fetch a random excuse from the API
	async function fetchExcuse() {
		const response = await fetch('/api/excuse');
		excuse = await response.text();
	}
	function copyToClipboard() {
		navigator.clipboard.writeText(excuse);
	}
</script>

<main>
	<div class="content">
		<h1>Excuse generator</h1>
		{#if excuse.length}
			<div class="quote">
				<ScallopedFrame>
					<span ondblclick={copyToClipboard} data-has-excuse={!!excuse.length}>{excuse}</span>
				</ScallopedFrame>
			</div>
		{:else}
			<p>
				Sometimes I get invited to events, and for whatever reason I don't want to go. I often feel
				stressed about explaining myself and having to say "no" to the host. Ultimately, the reason
				doesn't matter. I thought it would be way more fun for everyone to just use ridiculous funny
				excuses instead! at least this way we can all have a laugh about whatever it is.
			</p>
		{/if}
		<button onclick={fetchExcuse}>I need {excuse.length ? 'a better' : 'an'} excuse</button>
	</div>
</main>

<style>
	main {
		background: linear-gradient(124deg, #e3e81d, #1ddde8, #2b1de8, #dd00f3);
		background-size: 1800% 1800%;

		-webkit-animation: rainbow 18s ease infinite;
		-z-animation: rainbow 18s ease infinite;
		-o-animation: rainbow 18s ease infinite;
		animation: rainbow 12s ease infinite;
	}

	@keyframes rainbow {
		0% {
			background-position: 0% 82%;
		}
		50% {
			background-position: 100% 19%;
		}
		100% {
			background-position: 0% 82%;
		}
	}
	main {
		display: grid;
		place-items: center;
		height: 100vh;
		font-family: 'Comic Sans MS', 'chalkboard SE', 'Comic Neue', sans-serif;
	}

	@keyframes pulse {
		0% {
			scale: 1;
		}
		50% {
			scale: 1.1;
		}
		100% {
			scale: 1;
		}
	}
	.quote {
		margin-block: 2rem;
		animation: pulse 10s ease infinite;
	}
	.content {
		width: 50ch;
		max-width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		color: #fff;
		font-size: 1.25rem;
		margin-inline: auto;
		mix-blend-mode: difference;
	}
	span {
		position: relative;
		display: inline-block;
		line-height: 1.5;
		height: 3lh;
		color: #6f6;
		margin-inline: 1rem;
		margin-block: 2rem;
		width: 90%;
		&[data-has-excuse='true'] {
			&::before {
				content: '“';
				font-size: 2rem;
				line-height: 0;
				top: 1rem;
				left: -0.25rem;
				position: absolute;
				transform: translate(-100%);
			}
			&::after {
				content: '”';
				font-size: 2rem;
				line-height: 0;
				bottom: 0.75rem;
				right: -1rem;
				position: absolute;
			}
		}
	}
	button {
		font-size: 1.25rem;
		display: block;
		font-family: inherit;
		width: 100%;
		border: none;
		background: #f00;
		color: #fdd;
		transition: all 0.2s ease;
		box-shadow: 1px 2px 0 #0f0;
		&:hover {
			background: #d00;
			transform: translateY(-2px);
			box-shadow: 2px 6px 0 #0f0;
		}
		&:active {
			transform: translateY(-1px);
			box-shadow: 0 0 0 #0f0;
		}
	}
</style>
