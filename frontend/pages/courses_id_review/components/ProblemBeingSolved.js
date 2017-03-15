import React from 'react';

import { Problem } from '~/components/Problem';

class ProblemBeingSolved extends React.Component {
  static propTypes = {
    problem: React.PropTypes.object.isRequired,
    onRightAnswerGivenFn: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { speUpdateProblem: {} };
  }

  render = () =>
    <Problem
      mode="solving"
      onRightAnswerGivenFn={this.props.onRightAnswerGivenFn}
      initialContentEditorState={this.props.problem.content}
      initialExplanationEditorState={this.props.problem.explanation}
    />
}

export { ProblemBeingSolved };
