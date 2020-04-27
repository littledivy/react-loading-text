/** Just a simple example on how to use the module **/
import React from 'react';
import Loading from '../build/';

export default class Example {
  render() {
    <>
      <Loader />
      <Loader extras={["I love React", "I love Typescript"]} interval={4000} />
    </>
  }
}
