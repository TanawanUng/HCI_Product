import React, { useState } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import BasicCard from '../table/card'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ReplayIcon from '@mui/icons-material/Replay';
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { red, blue, green, yellow } from '@mui/material/colors';

function HomePage({ lorem }) {
    const [page, setPage] = useState(1)
    const [topLeft, setTopLeft] = useState('')
    const [topRight, setTopRight] = useState('')
    const [bottomLeft, setBottomLeft] = useState('')
    const [bottomRight, setBottomRight] = useState('')

    return (
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ letterSpacing: 3, display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'left' } }}>
                        <b>Product Customization</b><ReplayIcon fontSize="large" onClick={() => setPage(1)} />
                    </Typography>
                    {page === 1 &&
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography variant="body1" gutterBottom align="justify" sx={{ width: { xs: '320px', md: '380px' }, mt: 2, mb: 4, letterSpacing: 2 }}>
                                    {lorem}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button variant="contained" size="large" onClick={() => setPage(2)} sx={{ borderRadius: 28, backgroundColor: "#f27f29", width: 200 }}>สร้างออเดอร์</Button>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#13334c", width: 200 }}>ประวัติการสั่งสินค้า</Button>
                            </Box>
                        </Box>
                    }

                    {page === 2 &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: "#f5f5f5" }}>
                            <Box sx={{ width: { xs: '320px', md: '380px' } }}>
                                <CardHeader title="สร้างออเดอร์" sx={{ backgroundColor: "#f27f29" }} />
                                <CardContent>
                                    <Grid container sx={{ mb: 2 }}>
                                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <Box sx={{ border: 1, borderRight: 0 }}>
                                                <Box sx={{ margin: 1, width: 100, height: 100, backgroundColor: topLeft }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'left' }}>
                                            <Box sx={{ border: 1 }}>
                                                <Box sx={{ margin: 1, width: 100, height: 100, backgroundColor: topRight }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <Box sx={{ border: 1, borderRight: 0, borderTop: 0 }}>
                                                <Box sx={{ margin: 1, width: 100, height: 100, backgroundColor: bottomLeft }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'left' }}>
                                            <Box sx={{ border: 1, borderTop: 0 }}>
                                                <Box sx={{ margin: 1, width: 100, height: 100, backgroundColor: bottomRight }} />
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Top Left</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={topLeft}
                                            label="Top Left"
                                            onChange={(event) => { setTopLeft(event.target.value) }}
                                            sx={{ mb: 1 }}
                                        >
                                            <MenuItem value={red[500]}>Red</MenuItem>
                                            <MenuItem value={blue[500]}>Blue</MenuItem>
                                            <MenuItem value={green[500]}>Green</MenuItem>
                                            <MenuItem value={yellow[500]}>Yellow</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Top Right</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={topRight}
                                            label="Top Right"
                                            onChange={(event) => { setTopRight(event.target.value) }}
                                            sx={{ mb: 1 }}
                                        >
                                            <MenuItem value={red[500]}>Red</MenuItem>
                                            <MenuItem value={blue[500]}>Blue</MenuItem>
                                            <MenuItem value={green[500]}>Green</MenuItem>
                                            <MenuItem value={yellow[500]}>Yellow</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Botttom Left</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={bottomLeft}
                                            label="Botttom Left"
                                            onChange={(event) => { setBottomLeft(event.target.value) }}
                                            sx={{ mb: 1 }}
                                        >
                                            <MenuItem value={red[500]}>Red</MenuItem>
                                            <MenuItem value={blue[500]}>Blue</MenuItem>
                                            <MenuItem value={green[500]}>Green</MenuItem>
                                            <MenuItem value={yellow[500]}>Yellow</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Bottom Right</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={bottomRight}
                                            label="Bottom Right"
                                            onChange={(event) => { setBottomRight(event.target.value) }}
                                        >
                                            <MenuItem value={red[500]}>Red</MenuItem>
                                            <MenuItem value={blue[500]}>Blue</MenuItem>
                                            <MenuItem value={green[500]}>Green</MenuItem>
                                            <MenuItem value={yellow[500]}>Yellow</MenuItem>
                                        </Select>
                                    </FormControl>
                                </CardContent>
                                <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                borderRadius: 28,
                                                backgroundColor: "#13334c",
                                                width: 100,
                                            }}
                                            onClick={() => { setTopLeft(''); setTopRight(''); setBottomLeft(''); setBottomRight('') }}
                                        >
                                            RESET
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                borderRadius: 28,
                                                backgroundColor: "#13334c",
                                                width: 100,
                                            }}
                                        >
                                            ORDER
                                        </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    }

                </Grid>
                <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Box>
                    <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                        <BasicCard icon={<HourglassEmptyIcon />} title="Pending" amount="-" color="#f48d40" width={155} />
                        <BasicCard icon={<CloseIcon />} title="Failure" amount="18" color="#e4606d" width={155} />
                        <BasicCard icon={<CheckIcon />} title="Success" amount="120" color="#55b96d" width={155} />
                        <BasicCard icon={<LocationCityIcon />} title="Total" amount="138" color="#425e72" width={155} />
                    </Stack>
                </Grid>

            </Grid>
        </Box >
    )
}

export default HomePage