# jsonresume-theme-engineering-leader

[![Publish to npm](https://github.com/sjw7444/jsonresume-theme-engineering-leader/actions/workflows/publish.yml/badge.svg)](https://github.com/sjw7444/jsonresume-theme-engineering-leader/actions/workflows/publish.yml) [![NPM Version](https://img.shields.io/npm/v/jsonresume-theme-engineering-leader)](https://www.npmjs.com/package/jsonresume-theme-engineering-leader)

This is the engineering theme for [JSON Resume](http://jsonresume.org/), based off of [jsonresume-theme-engineering](https://github.com/skoenig/jsonresume-theme-engineering) and aims to implement the best practices for [engineering resumes](https://www.reddit.com/r/EngineeringResumes/wiki/index/). The original version was intended for [senior/staff level engineers](https://www.reddit.com/r/EngineeringResumes/wiki/index/#wiki_senior_engineers_and_above_.2810.2B_yoe.29) but this version is modified for CTOs/VPs/Directors.

It handles locations of jobs and allows for nested bullets but it renders dates exactly as provided as if they are strings.

## Using this theme

This theme is available on NPM as [jsonresume-theme-engineering-leader](https://www.npmjs.com/package/jsonresume-theme-engineering-leader) and can be installed by running `npm install jsonresume-theme-engineering-leader`.

If you are building your resume from a resume.json file and resume-cli then simply run `resume export --theme engineering-leader`.

## Example Resume

<p align="center">
  <kbd>
    <img src="https://github.com/sjw7444/jsonresume-theme-engineering-leader/blob/main/examples/example-resume.png?raw=true" alt="Richard Hendriks Resume"/>
  </kbd>
</p>

## Getting started with Development

To get started with theme development, this is what you'll need:

- [node.js](http://howtonode.org/how-to-install-nodejs)
- [npm](http://howtonode.org/introduction-to-npm)

If you're on Linux, you can simply run:

```bash
sudo apt-get install nodejs npm
```

Or if you're on OSX and got [Homebrew](http://brew.sh/) installed:

```bash
brew install node
```

### Install npm packages

We need to install the dependencies:

```bash
npm install
```

## PDF Export

To export your resume, you can run the following command below. This will automatically create a `resume.pdf` file within your current directory:

```bash
npm run export
```

If you want to see or modify an example, this project is configured to export a resume from the `examples` folder just by running vscode f5.

```bash
resume export --resume examples/example-resume.json --theme . examples/example-resume.html
```

## License

Available under [the MIT license](http://mths.be/mit).

## About & Contributing

This is a very small personal project but feel free to contribute and I will do my best to merge fixes and contributions.

### Notes

To make the example png, follow the steps below (and then rename and `-1` page extensions):

1. Install `brew install poppler`
2. Run `pdftoppm -png examples/example-resume.pdf examples/example-resume`
