import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const AndroidDatePicker = ({ selectedDate, setSelectedDate }: { selectedDate: Date, setSelectedDate: React.Dispatch<React.SetStateAction<Date>> }) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleChange = (e: DateTimePickerEvent, date: Date | undefined) => {
        if (date) setSelectedDate(date!)
        setIsOpen(false);
    }
    return (
        <View style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            elevation: 5,
            zIndex: 5,
        }}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={{ padding: 12 }}>
                <Text style={{ fontSize: 18, color: 'white' }}> {selectedDate.toLocaleDateString()} </Text>
            </TouchableOpacity>

            {
                isOpen &&

                <RNDateTimePicker
                    style = {{
                        width: '100%'
                    }}
                    themeVariant="dark"
                    display='default'
                    maximumDate={new Date()}
                    value={selectedDate}
                    onChange={handleChange}
                />
            }
        </View>
    )
}

export { AndroidDatePicker }