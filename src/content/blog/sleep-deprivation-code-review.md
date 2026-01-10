---
title: "What Sleep Deprivation Taught Me About Code Reviews"
description: "When you're running on 3 hours of sleep, you learn to appreciate simplicity. Your future self will thank you."
date: 2025-12-28
---

Three months into parenthood, I reviewed my own code from the week before. I had no memory of writing it. It was like reading a stranger's work—a very tired stranger who apparently thought nested ternaries were a good idea.

## The Fog

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.

### Before vs After

**Before kids:**
```javascript
const result = data
  .filter(x => x.status === 'active')
  .map(x => ({ ...x, processed: true }))
  .reduce((acc, x) => ({ ...acc, [x.id]: x }), {});
```

**After kids (3 hours sleep):**
```javascript
// TODO: make this work
// it works now, don't touch
const result = doTheThing(data);
```

## Clarity Through Exhaustion

Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit.

> When you're too tired to be clever, you write simple code. Simple code is good code.

## New Code Review Principles

1. **If I can't understand it at 3 AM, it's too complex** - Lorem ipsum dolor
2. **Comments are love letters to your future self** - Consectetur adipiscing
3. **Explicit is better than implicit** - Sed do eiusmod tempor

## The Silver Lining

Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.

Parenthood didn't make me a worse engineer. It made me a more empathetic one. I now write code for the exhausted version of myself—and that helps everyone on the team.
