import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

const MainContainer = styled.div`
  ${props =>
    props.fullScreen &&
    css`
      position: fixed;
      display: block;
      display: grid;
      z-index: 800;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
    `};
  ${props =>
    props.fullScreen &&
    !props.allowScrollbar &&
    css`
      overflow: hidden;
    `};

  ${props =>
    props.fullScreen &&
    props.allowScrollbar &&
    css`
      overflow: auto;
    `};

  ${props =>
    props.state === "entering" &&
    css`
      opacity: 0;
      transform: scale(0.6);
    `};

  ${props =>
    props.state === "entered" &&
    css`
      transition: all 400ms cubic-bezier(0.6, -0.6, 0.125, 1.65);
      transform: scale(1);
      border-radius: 0;
      opacity: 1;
    `};

  ${props =>
    props.state === "exiting" &&
    css`
      transition: all 350ms cubic-bezier(0.6, -0.6, 0.125, 1.65);
      position: fixed;
      overflow: hidden;
      display: block;
      z-index: 800;
      height: 100vh;
      width: 100vw;
      transform: scale(0.8);
      top: 0;
      left: 0;
      opacity: 0;
    `};

  ${props =>
    props.state === "exited" &&
    css`
      transition: opacity 150ms linear;
    `};
`;

const ReactFullScreenElement = props => {
  return (
    <div>
      <CSSTransition
        in={props.fullScreen}
        appear
        classNames="_fullscreen-transition"
        timeout={props.fullScreen ? 50 : 350}
      >
        {state => (
          <MainContainer
            fullScreen={props.fullScreen}
            allowScrollbar={props.allowScrollbar}
            state={state}
          >
            {props.children}
          </MainContainer>
        )}
      </CSSTransition>
    </div>
  );
};
Fullscreen.propTypes = {
  children: PropTypes.any,
  fullScreen: PropTypes.bool,
  allowScrollbar: PropTypes.bool
};

export default ReactFullscreenElement;
