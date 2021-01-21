<template>
  <div class="admin-user">
    <header>
      <h1>Administrative Panel</h1>
    </header>

    <main>
      <div class="panel">
        Hey dear, you made it into the Admin Panel. That signifies you earned some dignity. <br>
        <strong>Bravo!</strong>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminPage'

}
</script>

<style lang="scss" scoped>
main .panel {
  padding: 10px 30px;
  border: 2px solid azure;
}
</style>