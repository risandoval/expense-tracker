import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useEffect, useRef, useState } from 'react'
import { appColors } from '../../../styles/global'
import { Button, Pressable, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IOSDatePicker = ({ selectedDate, setSelectedDate }: { selectedDate: Date, setSelectedDate: React.Dispatch<React.SetStateAction<Date>> }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (e: DateTimePickerEvent, date: Date | undefined) => {
        if (date) setSelectedDate(date!)
    }

    return (
        <View style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            elevation: 5,
            zIndex: 5,
        }}>

            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={{padding: 12}}>
                <Text style={{ fontSize: 18, color: 'white' }}> {selectedDate.toLocaleDateString()} </Text>
            </TouchableOpacity>

            <View style={{
                position: 'absolute',
                display: isOpen ? 'flex' : 'none',
                alignItems: 'center',
                gap: 10,
                top: 50,
                left: 0,
                elevation: 5,
                zIndex: 5,
                width: '100%',
                backgroundColor: appColors.darkBlue,
                borderRadius: 10,
                overflow: 'hidden',
                padding: 20
            }}>
                <RNDateTimePicker
                    themeVariant="dark"
                    display='inline'
                    maximumDate={new Date()}
                    value={selectedDate}
                    onChange={handleChange}
                />

                <TouchableOpacity onPress={() => setIsOpen(false)} style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}> Close </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export { IOSDatePicker }