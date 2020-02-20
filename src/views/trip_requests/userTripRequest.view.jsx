import React from 'react'
import { Box, Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import TextInput from '../../components/TextInput.component.jsx';

export function Request(props) {
    return (
        <Box p={2}>
            <Card>
                <CardContent>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item><Typography style={{ fontWeight: "bold", fontSize: 20, color: '#616161' }} variant="h3">Round trip request</Typography></Grid>
                        <Grid item><Typography style={{ fontSize: 16, color: '#FBBC05' }} variant="h3">Pending</Typography></Grid>
                    </Grid>
                    <Box py={1}>
                        <Typography style={{ fontSize: 14, color: '#616161' }} variant="h3">Round trip request</Typography>
                    </Box>
                    <Typography style={{ fontSize: 14, color: '#616161' }} variant="h3">Round trip request</Typography>
                    <Box py={4}>
                        <Grid container justify="space-between">
                            <Grid xs={12} md={4} xl={2} item>
                            <Box px={1}>
                                <TextInput
                                    disabled={true}
                                    id="origin"
                                    label="Origin"
                                    name="origin"
                                    defaultValue="Kigali"
                                    required={false} />
                                    </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                            <Box px={1}>
                                <TextInput
                                    disabled={true}
                                    id="destination"
                                    label="Destination"
                                    name="destination"
                                    defaultValue="Kenya"
                                    required={false} />
                                    </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                            <Box px={1}>
                                <TextInput
                                    disabled={true}
                                    id="departureDate"
                                    label="Departure date"
                                    name="firstName"
                                    defaultValue="departureDate"
                                    required={false} />
                                    </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                            <Box px={1}>
                                <TextInput
                                    disabled={true}
                                    id="returnDate"
                                    label="Return Date"
                                    name="returnDate"
                                    defaultValue="Dominique"
                                    required={false} />
                                    </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                            <Box px={1}>
                                <TextInput
                                    disabled={true}
                                    id="reason"
                                    label="Reason"
                                    name="reason"
                                    defaultValue="Reason"
                                    required={false} />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={4} xl={2} item>
                                <Box px={1}>
                                <TextInput
                                    disabled={true}
                                    id="accomodation"
                                    label="Accomodation"
                                    name="accomodation"
                                    defaultValue="Dominique"
                                    required={false} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container justify="space-between" alignItems="flex-end">
                        <Grid item>
                            <Button disableElevation variant="contained" color="primary">
                                Edit
                        </Button>
                        </Grid>
                        <Grid item>
                            <Typography style={{ fontSize: 16, color: '#616161' }} variant="h3">Managed by : Shema Eric</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Request;
