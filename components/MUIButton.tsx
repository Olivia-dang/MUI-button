import React, { FunctionComponent } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core"

export interface MUIButtonProps {
  variant: "text" | "contained" | "outlined"
  color: "inherit" | "primary" | "secondary" | "default"
  backgroundColor: string
}

const useStyles = makeStyles({
  root: {
    background: "red",
  },
})

export const MUIButton: FunctionComponent<MUIButtonProps> = (
  props: MUIButtonProps
) => {
  const classes = useStyles()

  return (
    <>
      {props.backgroundColor === "red" ? (
        <Button className={classes.root}>Text</Button>
      ) : (
        <Button variant={props.variant} color={props.color}>
          Text
        </Button>
      )}
    </>
  )
}