<template>
  <header>
    <h1>Administrative Panel</h1>
  </header>

  <main>
    <div class="panel">
      Hey dear, you made it into the Admin Panel. That signifies you earned some reputation.<br>
      Not all visitors of the site gets here. To that, I say, <strong>Bravo!</strong>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AdminPage'

}
</script>

<style lang="scss" scoped>
header {
  text-align: center;
}

main .panel {
  padding: 10px 30px;
  border-bottom: 1px solid azure;
}
</style>