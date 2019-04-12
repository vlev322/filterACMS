import React, { Component } from "react";

import { Filter } from "./components/filter";

export class IndexView extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<Filter />
		);
	}
}
