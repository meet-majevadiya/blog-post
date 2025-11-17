import { useState } from 'react';


export default function EditEditor({ initialValue = '' }) {
    const [value, setValue] = useState(initialValue);


    const save = () => {
        // In production, call API to save markdown
        alert('Pretend saving changes (not implemented).');
    };


    return (
        <div style={{ marginTop: 16 }
        }>
            <label htmlFor="md-editor" > Edit Markdown </label>
            < textarea id="md-editor" rows={10} value={value} onChange={(e) => setValue(e.target.value)} style={{ width: '100%', fontFamily: 'monospace' }} />
            < div style={{ marginTop: 8 }}>
                <button onClick={save}> Save </button>
            </div>
        </div>
    );
}