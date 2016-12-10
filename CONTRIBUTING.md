# Contribution Guide

We welcome all contributions, big and small. After all, the best part
of open source is the community support.

We just have a few guidelines we would like to follow when you make
contributions. Please refer to this guide before making contributions
so that we can ensure that the process of contributions runs smoothly.

## Contributing to Legal Documents

These guidelines apply towards all changes you'd like to make to any
of the legal documents that are under the [`data`](data) folder.

 * Please ensure that each individual pull request you submit is
 a single fix or change. This is helpful when we want to organize
 contributions and pinpoint when a change happened.

 * Please verify that your changes do not have any spelling or grammatical
 errors. We all make mistakes, we would just like to minimize the frequency
 of such.

 * Please ensure that you use the proper command words that is appropriate
 for legal documents and that your changes are clear enough to be interpreted
 by anyone without extra context.

### Adding a new language to the documents

We welcome all translations for our documents as the purpose of this project is
to ensure that everyone can understand the documents. But please follow these
guidelines when submitting translations:

 * Each language must have a folder of its own inside of the 'data' folder.
 The folder must be two lower case characters that describes the language within
 the folder using the [official language codes](http://reference.sitepoint.com/html/lang-codes).

 * Please ensure that your contributions are only made to the files inside of
 the respectful language folder. This helps avoid conflicting changes to files.

 * Please only translate documents to languages that you are comfortable with.
 We have no way to guarantee that all documents are aptly translated but we would
 like to hold all translations up to a standard of quality.

 * Please **do not** translate the legal document itself. Only the explainations should
 be multilingual. The documents themselves are legally binding and will only be
 written and enforced in Canadian English.

## Using the issue tracker

The [issue tracker](https://github.com/pladoinc/legality/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests), but please follow the individual
guidelines for each of those types of issues.

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the [coding guidelines](#code-guidelines) used throughout the
project (indentation, accurate comments, etc.) and any other requirements
(such as test coverage).

Please do not edit any auto-generated files manually.

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/bootstrap.git
   # Navigate to the newly cloned directory
   cd bootstrap
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/twbs/bootstrap.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks.

5. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description against the `master` branch.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [MIT License](LICENSE) (if it
includes code changes) and under the terms of the
[Creative Commons Zero 1.0 License](https://creativecommons.org/publicdomain/zero/1.0/)
(if it includes changes in legal documents).

## Code guidelines

### HTML

[Adhere to the Code Guide.](http://codeguide.co/#html)

- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags).
- Use CDNs and protocol-relative URLs when possible.
- Use [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes in documentation examples to promote accessibility.

### CSS

[Adhere to the Code Guide.](http://codeguide.co/#css)

- When feasible, default color palettes should comply with [WCAG color contrast guidelines](https://www.w3.org/TR/WCAG20/#visual-audio-contrast).
- Except in rare cases, don't remove default `:focus` styles (via e.g. `outline: none;`) without providing alternative styles. See [this A11Y Project post](http://a11yproject.com/posts/never-remove-css-outlines/) for more details.

### JS

- No semicolons (in client-side JS)
- 2 spaces (no tabs)
- strict mode
- "Attractive"

## License

By contributing your code, you agree to license your contribution under the [MIT License](LICENSE).
By contributing to the legal documentation, you agree to license your contribution under the [Creative Commons Zero 1.0 License](https://creativecommons.org/publicdomain/zero/1.0/).

This contribution guide is a modified version of the official [Bootstrap Contribution Guide](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md)