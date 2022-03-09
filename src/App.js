import React, {useCallback, useEffect, useRef, useState} from 'react'
import {ThemeProvider} from '@mui/material/styles';
import theme from './components/theme'
import './App.css';
import Rulers from "./components/Ruler";
import {Stack} from "@mui/material";
import Dropzone from 'react-dropzone'
import Board from "./components/Board";

function App() {
    const [files, setFiles] = useState([])
    const [imageWidth, setImageWidth] = useState(0)
    const [imageHeight, setImageHeight] = useState(0)

    const train = useRef(null)

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );

        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])

    useEffect(() => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach(file => URL.revokeObjectURL(file.preview));
        }, [files]);


    return (
        <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={2} sx={{alignItems: 'stretch'}}>
                <div className='setting1' ref={train}>
                    {console.log(imageWidth)}
                    {files.length && <Board preview={files[0].preview} setImageWidth={setImageWidth} imageWidth={imageWidth} imageHeight={imageHeight} setImageHeight={setImageHeight}/>}
                    {(imageWidth!==0) && <Rulers imageWidth={imageWidth} imageHeight={imageHeight}/>}
                </div>
                <div className='setting'>
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test
                    this is a test


                </div>
            </Stack>
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </ThemeProvider>
    );
}

export default App;
