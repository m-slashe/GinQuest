/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { Hello } from './components/Hello'

interface Props {}

export default class App extends Component<Props> {
    public render() {
        return <Hello name="Rodrigo" enthusiasmLevel={2} />
    }
}
