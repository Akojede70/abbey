/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet"

const TitleText = ({ title }: any) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  )
}

export default TitleText