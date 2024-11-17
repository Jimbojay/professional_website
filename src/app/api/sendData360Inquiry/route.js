import nodemailer from 'nodemailer';
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

export async function POST(req) {
    try {
        const formData = await req.json();

        // // Generate Excel file with form data
        // const filePath = await generateExcel(formData);

        // // Send email with the Excel file as an attachment
        // await sendEmail(formData, filePath);

        // // Delete the file after sending
        // fs.unlinkSync(filePath);

        // Send email with the Excel file as an attachment
        await sendEmail(formData);


        return new Response(JSON.stringify({ message: 'Inquiry submitted successfully' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ message: 'Error submitting inquiry' }), { status: 500 });
    }
}

// Function to generate Excel file
async function generateExcel(formData) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data360 Inquiry');
    worksheet.addRow(['Field', 'Value']);
    Object.entries(formData).forEach(([field, value]) => worksheet.addRow([field, value]));
    // const filePath = path.join(process.cwd(), 'inquiry_data360.xlsx');
    const filePath = path.join('/tmp', 'inquiry_data360.xlsx');
    await workbook.xlsx.writeFile(filePath);
    return filePath;
}

// Function to send email with attachment
async function sendEmail(formData, filePath) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'imre.iddatasolutions@gmail.com',
        subject: 'INQUIRY Data360 audit',
        text: `Here is the Data360 inquiry submission:\n\n${Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n')}`,
        // attachments: [{ filename: 'inquiry_data360.xlsx', path: filePath }],
    };

    await transporter.sendMail(mailOptions);
}
