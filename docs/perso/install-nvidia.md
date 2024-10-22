
## Enable vsync to prevent screen tearing

Create `/etc/X11/xorg.conf` with `nvidia-xconfig`

Add these lines to `/etc/X11/xorg.conf`
```
Section "Screen"
    Identifier     "Screen0"
    Device         "Device0"
    Monitor        "Monitor0"
    DefaultDepth    24
    SubSection     "Display"
        Depth       24
    EndSubSection
    Option         "ForceCompositionPipeline" "on"
    Option         "ForceFullCompositionPipeline" "on"
EndSection
```

