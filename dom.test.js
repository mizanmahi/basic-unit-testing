import path from 'path'
import fs from 'fs'
import { it, vi, expect} from 'vitest'
import { renderTitle } from './dom'
// import { Window} from 'happy-dom'
import { JSDOM } from "jsdom"

 // loading the index.html file content
const htmlPath = path.join(__dirname, 'index.html')
const htmlContent = fs.readFileSync(htmlPath).toString()


// creating virtual dom
const dom = new JSDOM(htmlContent)
const document = dom.window.document

// stubbing the global document with the custom document
vi.stubGlobal('document', document)

it('should render the title', () => {
    // renderTitle()

    const titleEl = document.getElementById('title');
    const titlePara = titleEl.firstElementChild;

    expect(titlePara).not.toBeNull()
})