# jsonresume-theme-engineering-leader

[![Status](https://badge.fury.io/js/jsonresume-theme-engineering-leader.svg)](https://www.npmjs.org/package/jsonresume-theme-engineering-leader)

This is the engineering theme for [JSON Resume](http://jsonresume.org/), based off of [jsonresume-theme-engineering](https://github.com/skoenig/jsonresume-theme-engineering) and aims to implement the best practices for [engineering resumes](https://www.reddit.com/r/EngineeringResumes/wiki/index/). The original version was intended for [senior/staff level engineers](https://www.reddit.com/r/EngineeringResumes/wiki/index/#wiki_senior_engineers_and_above_.2810.2B_yoe.29) but this version is modified for CTOs/VPs/Directors.

<p align="center">
  <kbd>
    <img src="https://github.com/sjw7444/jsonresume-theme-engineering-leader/blob/main/example-resume.png?raw=true" alt="Richard Hendriks Resume"/>
  </kbd>
</p>

## Getting started

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

If you want to see or modify and example, this project is configured to export a resume from the `example` folder just by running vscode f5.

```bash
resume export --resume example-resume.json --theme . example-resume.html
```

## License

Available under [the MIT license](http://mths.be/mit).

## About & Contributing

This is a very small personal project but feel free to contribute and I will do my best to merge fixes and contributions.

### Notes

To make the example png, follow the steps below:

1. Install `brew install poppler`
2. Run `pdftoppm -png example-resume.pdf example-resume`
