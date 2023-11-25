import React from 'react'
import { View, Text ,Image} from 'react-native'
import { icons } from '../../../constants'

import styles from './company.style'

const Company = (companyLogo,companyName,jobTitle,location) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {/* <Image source={{uri:companyLogo}}
          style={styles.logoImage}
        /> */}
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
      </View>
    </View>
  )
}

export default Company