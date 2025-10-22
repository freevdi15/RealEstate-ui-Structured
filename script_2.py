import zipfile

# Create a zip archive containing all the project files
with zipfile.ZipFile('BeRealEstateAi_Frontend.zip', 'w') as archive:
    archive.write('index.html')
    archive.write('styles.css')
    archive.write('script.js')
    archive.write('README.md')

print('ZIP archive created: BeRealEstateAi_Frontend.zip')