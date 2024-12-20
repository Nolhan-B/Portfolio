"use client"

import * as React from "react"
import styles from './test.module.css'
import { ModeToggle } from "./theme-provider"

export function TestComp() {
  return(
    <div className={styles.container}>
        <ModeToggle/>
    </div>
  );
}
