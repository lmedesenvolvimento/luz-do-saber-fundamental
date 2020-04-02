import React from 'react'
import NextLink from 'next/link'
import { format } from 'url'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const Link = ({ children, ...props }) => {
    return (
        <NextLink
            {...props}
            as={`${publicRuntimeConfig.basePath || ''}${format(props.href)}`}
        >
            {children}
        </NextLink>
    )
}

export default Link