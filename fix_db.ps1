$content = [System.IO.File]::ReadAllText('lib/smd.js')

# Target 1: Fix connnectMongo variable reference
$old1 = 'await _0x1268d[_0x24729c(0x183)](mongodb)'
$new1 = 'await _0x1268d[_0x24729c(0x183)](global.mongodb || process.env.MONGODB_URI)'

# Target 2: Fix isMongodb global assignment in main
$old2 = 'global.isMongodb=await connnectMongo();'
$new2 = 'isMongodb=await connnectMongo(); global.isMongodb=isMongodb;'

if ($content.Contains($old1)) {
    $content = $content.Replace($old1, $new1)
    Write-Output "Applied Patch 1"
} else {
    Write-Output "Patch 1 Target Not Found"
}

if ($content.Contains($old2)) {
    $content = $content.Replace($old2, $new2)
    Write-Output "Applied Patch 2"
} else {
    Write-Output "Patch 2 Target Not Found"
}

[System.IO.File]::WriteAllText('lib/smd.js', $content)
