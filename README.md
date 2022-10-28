# Astro Integrations Benchmark

A server-side rendering benchmark of different [Astro Integrations](https://docs.astro.build/en/guides/integrations-guide/). This benchmark renders 100 pages. Each page contains 5000 component instances. Each component contains a `<h1>` and `<p>` element. 
## Results

![basics](/results_2022_10_28.png)

The "Without component" benchmark inlines the `<h1>` and `<p>` element in the Astro page.

## How to run this benchmark

1. `npm install`
2. Go to `/src/pages/[id].astro` and uncomment the integration you want to test.
3. `npm run build`
4. The duration will be displayed at the end.

## Raw data

Measured on a AMD Ryzen 7 5800X3D 8-Core Processor

| Framework	               | 1. Run	| 2. Run | Average |
| :----------------------- | :----- | :----- | :-----  |
| Svelte 3.52.0	           | 14.53	| 14.60	 | 14.57   |
| Solid 1.6.0	           | 14.84	| 14.81	 | 14.83   |
| Preact 10.11.2	       | 14.88	| 14.79	 | 14.84   |
| Without component 1.6.0  | 19.18	| 19.58	 | 19.38   |
| Vue 3.2.41	           | 23.18  | 23.20	 | 23.19   |
| Lit 2.4.0		           | 24.80  | 24.72	 | 24.76   |
| Astro 1.6.0	           | 33.66	| 33.80	 | 33.73   |
| React 18.2.0	           | 79.61	| 80.06	 | 79.84   |
