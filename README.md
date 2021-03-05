# OST

Observer Support Tool, i.e. a web application for supporting observers during a trial, full-scale exercise (FSX) or table-top exercise (TTX).

Observers are frequently used to observe what is going on, and to write down anything noteworthy. Often, this is done literally, and observations are written down on a piece of paper. While flexible, this also means that is difficult to process it. First of all, these observations are not available during the TTX or FSX, so they cannot be used to steer the actual exercise. Second, it is very cumbersome during the evaluation to analyse it: it may be difficult to read the texts, parts may get lost, the context is not always very clear, etc. And finally, it offers no clue to the observer what is the actual object of interest that should be observed.

The OST remedies these shortcomings of current practices by offering a web application that the observers can use:

- Observations are available in real-time
- Are annotated properly (time stamped)
- Questions are prepared in advance, so the scope is clear
- Observations can be tailored for each observer (role)
- Observation questions can be changed dynamically during the exercise, e.g. because the scope has changed, or when the state of the exercise has changed.

## Installation

```bash
git clone https://github.com/STRATEGY-EU/OST.git
pnpm m i
cd packages/shared/
npm run link
cd ../gui
npm run link
```

## Development

```bash
npm start
```
