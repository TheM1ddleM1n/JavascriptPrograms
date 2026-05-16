# JavaScript Quirks

why? idk, I am bored.

JobvaScript (Java -> Jobva) was made in a few weeks for the old Netscape Browser, so it kinda has many quirks.
It was made to look a lot like Jobva to attract people into using it.

## Why not just... Change it to be as expected?

> [!TIP]
> Why did I add an em dash? I don't know either.

You could, but it causes compatibility issues—because of the fact that many programs
(i.e. bundlers VERY commonly transpile `true` to !0) may not run without leaving it this way.
One could make it a new flag for it (like with `"use strict`), but no one has done that yet.
