import React from 'react'
import styled, { css } from 'styled-components'


export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderIcon />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`

const LoaderIcon = styled.div`
  border: 4px solid red; 
  border-top: 4px solid red; 
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`