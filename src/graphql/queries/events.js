import { gql } from '@apollo/client'

export const getALlEvents = gql`
  query {
    events {
      id
      title
      description
      coverPhotoUrl
      startTime
      endTime
      photos {
        id
        url
      }
      address {
        address
        lat
        lng
      }
      group {
        id
        name
        description
      }
    }
  }
`

export const getEventById = gql`
  query {
    event(id: "1") {
      id
      title
      description
      coverPhotoUrl
      startTime
      endTime
      photos {
        id
        url
      }
      address {
        address
        lat
        lng
      }
      group {
        id
        name
        description
      }
    }
  }
`
