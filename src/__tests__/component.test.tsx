import React from "react";
import { render } from "@testing-library/react";

import LoadingView from '../component';

describe("<LoadingView />", () => {
  test("should display the component, with default props", async () => {
    render(<LoadingView />)
  });
});

describe("<LoadingView interval={5000} />", () => {
  test("should display the component, with interval prop", async () => {
    render(<LoadingView interval={5000} />)
  });
});

describe("<LoadingView extras={[\"ping pong\", \"ding dong\"]} />", () => {
  test("should display the component, with extras prop", async () => {
    render(<LoadingView extras={["ping pong", "ding dong"]}/>)
  });
});

describe("<LoadingView interval={5000} extras={[\"ping pong\", \"ding dong\"]} />", () => {
  test("should display the component, with extras and interval props", async () => {
    render(<LoadingView interval={5000} extras={["ping pong", "ding dong"]}/>)
  });
});
