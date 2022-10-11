import React from "react"

type modalRef = React.Ref<HTMLDivElement>

export type useAnimateModalHook = (animateClass: string, open: boolean) => modalRef