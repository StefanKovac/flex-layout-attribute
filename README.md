# [Flex Layout Attribute (FLA)](http://progressivered.com/fla/)

Layout helper based on CSS flexbox specification designed to serve you as **quick flexbox shorthand** by using two custom html attributes — **layout** and **self**.
### Basic example
Items distributed in a row and centered within container:
``` html
<div layout="row center-center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

#### Try live — [interactive demo](http://progressivered.com/fla/?d=0&v=1&h=1&s=0&i=000&a=000#playground)
[![View demo](http://progressivered.com/assets/img/fla/fla-github.png)](http://progressivered.com/fla/?d=0&v=1&h=1&s=0&i=000&a=000#playground)

### Benefits
- **Dedicated HTML attribute** — separated layout markup, semantic & concise syntax.
- **Beyond grids** — ratio relationships, element sizes based on a scale.
- **Rapid prototyping** — design in browser, quick iterations, no need to write CSS for layout.
- **Solid base** — ease to extend and customize.

### Quick start
Several quick start options are available:

* [Download the latest release](https://github.com/StefanKovac/flex-layout-attribute/releases)
* Clone the repo: `git clone https://github.com/StefanKovac/flex-layout-attribute.git`.
* Install with npm: `npm install flex-layout-attribute`.

### Usage
1) Insert flex-layout-attribute.min.css in document HEAD:
```html
<link href="path/to/css/flex-layout-attribute.min.css" rel="stylesheet">
```

2) Add layout attribute to html elements:
```html
<div layout="row center-justify">
    ...
</div>
```

### Development
1. Clone the repo: `git clone https://github.com/StefanKovac/flex-layout-attribute.git`.
2. Install dependencies: `npm run setup`.
3. Build FLA: `gulp` or set watcher: `gulp watch`

### Learn more
Interactive demo, documentation and snippets — http://progressivered.com/fla/


* * *
###### License
FLA is released under [the MIT license](https://github.com/StefanKovac/flex-layout-attribute/blob/master/LICENSE).
