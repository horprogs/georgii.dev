export interface DataItemInterface {
  title: string
  description: string
  link: string
  img: string
}

export interface SiteDataInterface {
  title: string
  author: {
    name: string
    summary: string
  }
  description: string
  siteUrl: string
  openSource: DataItemInterface[]
  articles: DataItemInterface[]
}

export interface DataInterface {
  site: {
    siteMetadata: SiteDataInterface
  }
}
