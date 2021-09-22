import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles"
import createStyles from '@material-ui/core/styles/createStyles'

export interface MUIButtonProps {
  variant: "text" | "contained" | "outlined" | "red";
  color: 'inherit' | 'primary' | 'secondary' | 'default'
}

export const MUIButton: FunctionComponent<MUIButtonProps> = (
  props: MUIButtonProps
) => {
  const styles = useStyles()
  return (
    <>
      {props.variant === "red" ? (
        <Button className={styles.buttonBackgroundColor}>Text</Button>
      ) : (
        <Button variant={props.variant} color={props.color}>Text</Button>
      )}
    </>
  );
};

const useStyles = makeStyles<Theme>((theme) => {
    createStyles({
        buttonBackgroundColor: {
            backgroundColor: "red"
        }
    })
})
