import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div>Home</div>
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>
    </div>
    <div>Profile</div>
  </header>
)

export default Header
