# svelte-utilities

svelte-utilities is a small utilities library for Svelte/SvelteKit that provides features I use in almost every project, such as:

* Lazy loading images
* Outclick event handling
* Intersection observers
* Entry animations

## Installation

Clone at your own risk! Once I complete testing the package will be available on NPM.

```bash

```

## Usage

```javascript
//npm
import { animateIn, intersectionObserver, lazyLoad, outClick } from 'svelte-utilities'

// animate in (margin refers to bottom margin)
<div use:animateIn={{delay: 250, duration: 500, margin: '100px'}}>Hello World!</div>

// intersection observer
<div 
use:intersectionObserver={{marginTop: '100px', marginBottom: '100px', threshold: 0}}
on:enter={()=>console.log('entering viewport')}
on:exit={()=>console.log('exiting viewport')}>
Hello World!
</div>

// lazyLoad
//(src is optional in image tag, can use css background or something else as a placeholder)
// set transition-opacity CSS property to animate image load
<img use:lazyLoad={'/image.jpg'} src='/placeholder.jpg'>

// out click 
<div use:outClick on:outClick={()=>console.log('clicked outside!')}>Hello World!</div>
```

## Contributing
If you have a utility you'd like to add feel free to make a pull request. Please open an issue first to discuss what you would like to add and how you'd implement it.

## License
[MIT](https://choosealicense.com/licenses/mit/)